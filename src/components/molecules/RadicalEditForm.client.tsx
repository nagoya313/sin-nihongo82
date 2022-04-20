import { Button } from '@chakra-ui/react';
import { type radical } from '../../features/radical/radicalQuery.server';
import { radicalUpdateParams } from '../../features/radical/updateParams';
import Form from '../../libs/form/Form.client';
import NumberInputField from './NumberInputField.client';

type RadicalEditFormProps = {
  radical: NonNullable<Awaited<ReturnType<typeof radical>>>;
};

const RadicalEditForm = ({ radical }: RadicalEditFormProps) => (
  <Form schema={radicalUpdateParams} defaultValues={radical}>
    {({ register, formState }) => (
      <>
        <NumberInputField label="コードポイント" {...register('code_point')} />
        <NumberInputField label="画数" {...register('stroke_count')} />
        <Button isDisabled={formState.isInvalid}>更新する</Button>
      </>
    )}
  </Form>
);

export default RadicalEditForm;
