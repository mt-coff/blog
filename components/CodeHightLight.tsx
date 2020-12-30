import HightLight, { defaultProps, Language } from "prism-react-renderer";
import github from "prism-react-renderer/themes/github";
import { FC } from "react";

type Props = {
  language: string;
};

const CodeHightLight: FC<Props> = ({ children, language }) => {
  return (
    <HightLight
      {...defaultProps}
      code={children.toString()}
      language={language as Language}
      theme={github}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <code className={className} style={style}>
          {tokens.map((line, i) => (
            <div
              className="table-row"
              key={i}
              {...getLineProps({ line, key: i })}
            >
              <div className="table-cell pr-2 opacity-50">{i + 1}</div>
              <div className="table-cell">
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            </div>
          ))}
        </code>
      )}
    </HightLight>
  );
};

export default CodeHightLight;
