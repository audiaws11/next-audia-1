import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SubmitButton from '@/component/Button/SubmitButton';

describe('SubmitButton', () => {
    test('renders button with title', () => {
        render(<SubmitButton title="Submit" loading={false} />);
        expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
    });

    test('button shows loading state correctly', () => {
        render(<SubmitButton title="Submit" loading={true} />);
        expect(screen.getByRole('button', { name: 'Submitting...' })).toBeDisabled();
    });

    describe('SubmitButton', () => {

        test('button handles clicks when loading', () => {
            const handleClick = jest.fn();
            render(<SubmitButton title="Submit" onClick={handleClick} loading={true} />);
            const button = screen.getByRole('button', { name: 'Submitting...' });
            userEvent.click(button);  // Simulate the user clicking the button
            expect(handleClick).toHaveBeenCalledTimes(0);  // Verify the handler was not called
        });
    });
    
});
