import { VStack } from '@chakra-ui/react';
import omit from 'lodash/omit';
import { type radical } from '../../features/radical/radicalQuery.server';
import { radicalUpdateParams } from '../../features/radical/updateParams';
import Form from '../../libs/form/Form.client';
import SubmitButton from '../atoms/SubmitButton.client';
import NumberInputField from './NumberInputField.client';

type RadicalEditFormProps = {
  radical: NonNullable<Awaited<ReturnType<typeof radical>>>;
};

const RadicalEditForm = ({ radical }: RadicalEditFormProps) => (
  <Form
    schema={radicalUpdateParams}
    options={{ defaultValues: omit(radical, ['kanji_count', 'radical']) }}
    onSubmit={(value) => {
      console.log(value);
    }}
  >
    {({ control }) => (
      <VStack mt={4} align="start">
        <NumberInputField label="コードポイント" control={control} name="code_point" />
        <NumberInputField label="画数" control={control} name="stroke_count" />
        <SubmitButton control={control} text="更新する" />
      </VStack>
    )}
  </Form>
);

export default RadicalEditForm;
