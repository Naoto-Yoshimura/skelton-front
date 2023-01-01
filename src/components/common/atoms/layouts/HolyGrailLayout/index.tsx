import React, {ReactNode} from 'react';
import styles, {headerStyle, bodyStyle, mainStyle, sidebarStyle, subStyle, footerStyle} from "./index.tailwind";

type Props = {
  header,
  headerImage?: ReactNode,
  sidebar: ReactNode,
  sub,
  footer: ReactNode,
  children: ReactNode,
  sidebarLeft: Boolean,
  className?: String;
}

const HolyGrailLayout = ({
  header,
  headerImage,
  sidebar,
  sub,
  footer,
  children,
  sidebarLeft=true,
  className, 
  ...props
}: Props) => {
  return (
    <div className={[styles, className].join(" ")} {...props}>
      <div className={headerStyle}>
        {header}
      </div>
      <div>
        {headerImage}
      </div>
      {sidebarLeft?(
        <body className={bodyStyle}>
          <div className={sidebarStyle}>
            {sidebar}
          </div>
          <div className={mainStyle}>
            {children}
          </div>
          <div className={subStyle}>
            {sub}
          </div>
        </body>
      ):(
        <body className={bodyStyle}>
          <div className={subStyle}>
            {sub}
          </div>
          <div className={mainStyle}>
            {children}
          </div>
          <div className={sidebarStyle}>
            {sidebar}
          </div>
        </body>
      )}
      <footer className={footerStyle}>
        {footer}
      </footer>
    </div>
  );
}

export default HolyGrailLayout;