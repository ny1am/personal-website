import '@total-typescript/ts-reset/dist/filter-boolean';

/* eslint-disable solid/reactivity */
import { ResumeSchema } from '../gen/schema.d';
import { Basics, Education, Languages, Skills, Work } from './blocks';
import { deleteByPath } from './utils';

type Props = { schema: ResumeSchema; ignore?: string[] };

const App = (props: Props) => {
  const schema = (props.ignore ?? []).reduce(
    (res, path) => deleteByPath(res, path),
    props.schema
  );

  return (
    <>
      {schema.basics && <Basics basics={schema.basics} />}
      {!!schema.skills?.length && <Skills skills={schema.skills} />}
      {!!schema.work?.length && <Work work={schema.work} />}
      {!!schema.education?.length && <Education education={schema.education} />}
      {!!schema.languages?.length && <Languages languages={schema.languages} />}
    </>
  );
};

export default App;
