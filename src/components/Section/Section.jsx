import { SectionStyled } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionStyled className="section">
      <h1>{title}</h1>
      <>{children}</>
    </SectionStyled>
  );
};
