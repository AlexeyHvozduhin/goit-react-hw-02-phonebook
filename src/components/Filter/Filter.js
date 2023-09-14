import { FilterInput, FilterLabel, FilterForm } from './Filter.styled';

export const Filter = ({ changeFilter }) => {
  return (
    <FilterForm>
      <FilterLabel>contacts</FilterLabel>
      <FilterInput
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={line => {
          changeFilter(line.target.value);
        }}
        required
      />
    </FilterForm>
  );
};
