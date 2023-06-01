import React, { Fragment, useState, useEffect } from "react";
import { ErrorText, InputContainer, LabelContainer } from "./styles";
import { AtomInput } from "../../atoms/Input";
import { AtomBody } from "../../atoms/Typography/Body";
import {
  RegisterOptions,
  DeepMap,
  FieldError,
  UseFormRegister,
  Path,
  FieldValues,
} from "react-hook-form";
import { IInputProps } from "../../atoms/Input/InputTypes";

export type IMoleculeInputProps<TFormValues extends FieldValues> = {
  name: Path<TFormValues>;
  rules?: RegisterOptions;
  label?: string;
  register?: UseFormRegister<TFormValues>;
  errors?: Partial<DeepMap<TFormValues, FieldError>>;
} & Omit<IInputProps, "name">;

export const MoleculeInput = <TFormValues extends Record<string, unknown>>({
  name,
  register,
  rules,
  errors,
  label,
  className,
  ...props
}: IMoleculeInputProps<TFormValues>) => {
  const errorMessages = errors && errors[name];
  const hasError = !!(errors && errorMessages);

  return (
    <InputContainer>
      {label !== "" && (
        <LabelContainer>
          <AtomBody size="medium" text={label ?? ""} weight="500" align="left" color="neutral700" />
        </LabelContainer>
      )}
      <AtomInput
        name={name}
        error={hasError}
        {...props}
        {...(register && register(name, rules))}
      />
      {hasError && (
        <ErrorText>
          <AtomBody
            size="small"
            text={errorMessages.message ?? ""}
            color={"secondary400"}
            weight="light"
            align="left"
          />
        </ErrorText>
      )}
    </InputContainer>
  );
};
