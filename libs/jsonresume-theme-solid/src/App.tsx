import { For } from 'solid-js';
import { formatDate } from './utils';

type Schema = Record<string, any>;

type Props = {
  schema: Schema;
};

const App = ({ schema }: Props) => {
  const { basics, skills = [], work = [], education = [], languages = [] } = schema;
  return (
    <div id="resume">
      <section class="heading">
        <header>
          <h1>{basics.name}</h1>
          <div class="contact">
            {basics.email && (
              <span class="detail">
                <a href={`mailto:${basics.email}`}>{basics.email}</a>
              </span>
            )}
            {basics.phone && <span class="detail">{basics.phone}</span>}
            {basics.website && (
              <span class="detail">
                <a href={basics.website}>{basics.website}</a>
              </span>
            )}
          </div>
        </header>
        {basics.summary && <p>{basics.summary}</p>}
      </section>
      {skills.length > 0 && (
        <section id="skills">
          <h2>Skills</h2>
          <For each={skills}>
            {(skill) => (
              <div class="item">
                {skill.name && <div class="name">{skill.name}</div>}
                {(skill.keywords ?? []).length > 0 && (
                  <div class="keywords">{skill.keywords.join(', ')}</div>
                )}
              </div>
            )}
          </For>
        </section>
      )}
      {work.length > 0 && (
        <section id="experience">
          <h2>Experience</h2>
          <For each={work}>
            {(item) => (
              <div class="item">
                {/* <header>{item.name && <h3 class="name">{item.name}</h3>}</header> */}
                {item.position && <span class="position">{item.position}</span>}
                {item.startDate && (
                  <span class="startDate">{formatDate(item.startDate)}</span>
                )}
                <span class="endDate">
                  {item.endDate ? ` - ${formatDate(item.endDate)}` : '- Present'}
                </span>
                {item.summary && (
                  <div class="summary">
                    <p>{item.summary}</p>
                  </div>
                )}
                {(item.highlights ?? []).length > 0 && (
                  <ul class="highlights">
                    <For each={item.highlights}>
                      {(highlight) => <li>{highlight}</li>}
                    </For>
                  </ul>
                )}
              </div>
            )}
          </For>
        </section>
      )}
      {education.length > 0 && (
        <section id="education">
          <h2>Education</h2>
          <For each={education}>
            {(item) => (
              <div class="item">
                <header>
                  {item.institution && <h3 class="name">{item.institution}</h3>}
                </header>
                <div class="dates">
                  {item.startDate && (
                    <span class="startDate">{formatDate(item.startDate)}</span>
                  )}
                  <span class="endDate">
                    {item.endDate ? ` - ${formatDate(item.endDate)}` : '- Present'}
                  </span>
                </div>
                <div class="qualification">
                  {item.studyType && <span class="studyType">{item.studyType}</span>}
                  {item.area && <span class="area"> - {item.area}</span>}
                </div>
              </div>
            )}
          </For>
        </section>
      )}

      {languages.length > 0 && (
        <section id="languages">
          <h2>Languages</h2>
          <For each={languages}>
            {(language) => (
              <div class="item">
                {language.language && <div class="language">{language.language}</div>}
                {language.fluency && (
                  <div class="fluency">
                    <em>{language.fluency}</em>
                  </div>
                )}
              </div>
            )}
          </For>
        </section>
      )}
    </div>
  );
};

export default App;
