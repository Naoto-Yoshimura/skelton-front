import React, {ReactNode} from 'react';
import styles from "./index.tailwind";


type Props = {
  children: ReactNode;
  className?: String;
}

const EmptyTemplate = ({children, className, ...props}: Props) => (
  <div className={[styles, className].join(" ")} {...props}>
    {children}
  </div>
);

export default EmptyTemplate;