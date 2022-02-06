import {
  DescriptionComponetStyled,
  TextLink,
} from './DescriptionComponent.styled';

const DescriptionComponent = () => {
  return (
    <DescriptionComponetStyled>
      Personal blog by <TextLink href="#">Yurii Vitenko</TextLink>
      <p>I explained with words</p>
    </DescriptionComponetStyled>
  );
};

export default DescriptionComponent;
