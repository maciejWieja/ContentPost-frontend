import { styled } from 'styled-components';
import { Label } from '../../atoms/Label/Label';
import { Input } from '../../atoms/Input/Input';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: ${({ width }) => width};
`;

const FormField = forwardRef(
  (
    {
      width = '170px',
      height = '35px',
      onChange,
      value,
      label,
      name,
      id,
      type = 'text',
      isTextarea,
      bRadius = '25px',
      isError,
      fontSize = '12px',
      labelFontSize = '16px',
      padding = '0 15px',
      ...props
    },
    ref,
  ) => (
    <Wrapper width={width}>
      <Label htmlFor={id} fontSize={labelFontSize}>
        {label}
      </Label>
      {isTextarea ? (
        <Input
          as="textarea"
          $isTextarea
          height={height}
          onChange={onChange}
          value={value}
          name={name}
          id={id}
          $bRadius={bRadius}
          type={type}
          ref={ref}
          $isError={isError}
          fontSize={fontSize}
          $padding={padding}
          {...props}
        />
      ) : (
        <Input
          height={height}
          onChange={onChange}
          value={value}
          name={name}
          id={id}
          $bRadius={bRadius}
          type={type}
          ref={ref}
          $isError={isError}
          fontSize={fontSize}
          $padding={padding}
          {...props}
        />
      )}
    </Wrapper>
  ),
);

FormField.displayName = 'FormField';

FormField.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  isTextarea: PropTypes.bool,
  bRadius: PropTypes.string,
  fontSize: PropTypes.string,
  labelFontSize: PropTypes.string,
  padding: PropTypes.string,
  isError: PropTypes.bool,
};

export default FormField;
