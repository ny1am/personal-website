import { writeFileSync } from 'fs';
import { compile } from 'json-schema-to-typescript';
import resumeSchema from '@jsonresume/schema/schema.json' with { type: 'json' };

async function generate() {
  const data = await compile(resumeSchema as any, 'ResumeSchema');
  writeFileSync('gen/schema.d.ts', data);
}

await generate();
