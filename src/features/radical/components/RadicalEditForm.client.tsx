import { VStack } from '@chakra-ui/react';
import omit from 'lodash/omit';
import Form from '~/components/form/Form.client';
import NumberInputField from '~/components/form/NumberInputField.client';
import SubmitButton from '~/components/form/SubmitButton.client';
import { type radical } from '../query/radical.server';
import { radicalUpdateParams } from '../query/updateParams';

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
