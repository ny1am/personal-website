import { ResumeSchema } from '../gen/schema.d';
import { Basics, Education, Languages, Skills, Work } from './blocks';

type Props = { schema: ResumeSchema };

const App = (props: Props) => {
  return (
    <>
      {props.schema.basics && <Basics basics={props.schema.basics} />}
      {!!props.schema.skills?.length && <Skills skills={props.schema.skills} />}
      {!!props.schema.work?.length && <Work work={props.schema.work} />}
      {!!props.schema.education?.length && <Education education={props.schema.education} />}
      {!!props.schema.languages?.length && <Languages languages={props.schema.languages} />}
    </>
  );
};

export default App;
