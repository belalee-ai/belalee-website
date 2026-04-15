/**
 * Parse skills-inventory.md into structured data at build time.
 * The markdown uses h2 for top-level categories, h3 for subcategories,
 * and pipe-delimited tables for skills.
 */

export interface SkillEntry {
  name: string;
  trigger: string;
  source?: string;
}

export interface SkillSubcategory {
  title: string;
  titleEn: string;
  skills: SkillEntry[];
}

export interface SkillCategory {
  title: string;
  subcategories: SkillSubcategory[];
}

export function parseSkillsInventory(markdown: string): SkillCategory[] {
  const lines = markdown.split('\n');
  const categories: SkillCategory[] = [];
  let currentCategory: SkillCategory | null = null;
  let currentSub: SkillSubcategory | null = null;
  let inTable = false;
  let hasSource = false;

  for (const line of lines) {
    const trimmed = line.trim();

    // h2 = top-level category
    if (trimmed.startsWith('## ') && !trimmed.startsWith('###')) {
      const title = trimmed.replace('## ', '');
      if (title.startsWith('#') || title === '---') continue;
      currentCategory = { title, subcategories: [] };
      categories.push(currentCategory);
      currentSub = null;
      inTable = false;
      continue;
    }

    // h3 = subcategory
    if (trimmed.startsWith('### ')) {
      const raw = trimmed.replace('### ', '');
      // Extract English part from parentheses: "Content Creation (内容创作)" or "核心工作流 — by Anthropic"
      const enMatch = raw.match(/\(([^)]+)\)/);
      const titleEn = enMatch ? enMatch[1] : '';
      const title = raw.replace(/\s*\([^)]+\)/, '').replace(/\s*—.*$/, '').trim();
      if (currentCategory) {
        currentSub = { title, titleEn, skills: [] };
        currentCategory.subcategories.push(currentSub);
      }
      inTable = false;
      continue;
    }

    // Table header detection
    if (trimmed.startsWith('| Skill')) {
      hasSource = trimmed.includes('来源');
      inTable = true;
      continue;
    }

    // Skip separator row
    if (trimmed.startsWith('|---') || trimmed.startsWith('| ---')) {
      continue;
    }

    // Table row
    if (inTable && trimmed.startsWith('|') && currentSub) {
      const cells = trimmed.split('|').map(c => c.trim()).filter(Boolean);
      if (cells.length >= 2) {
        const name = cells[0].replace(/`/g, '');
        const trigger = cells[1];
        const source = hasSource && cells[2] ? cells[2] : undefined;
        currentSub.skills.push({ name, trigger, source });
      }
      continue;
    }

    // Empty line or separator ends table
    if (trimmed === '' || trimmed === '---') {
      inTable = false;
    }
  }

  return categories;
}
