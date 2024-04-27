import { render, screen } from '@testing-library/react';
import TextInput from '@/component/TextInput/TextInput';
import userEvent from '@testing-library/user-event';

describe('TextInput', () => {
    test('renders TextInput with default value', () => {
        render(<TextInput label="Name" id="name" name="nameFood" defaultValue="Test Food" placeholder="Name of food" type="text" />);
        const inputElement = screen.getByPlaceholderText('Name of food');
        expect(inputElement.value).toBe('Test Food');
    });

});