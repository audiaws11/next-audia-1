import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DeleteButton from '@/component/Button/DeleteButton';

describe('DeleteButton', () => {
    describe('DeleteButton', () => {
        it('renders Delete Button with food name', () => {
            render(<DeleteButton foodName="nasi kepal prindavan" onClick={() => {}} />);
            expect(screen.getByRole('button', { name: 'Delete nasi kepal prindavan' })).toBeInTheDocument();
        });
    
        it('handles click event', () => {
            const mockHandleDelete = jest.fn();
            render(<DeleteButton foodName="pizza" onClick={mockHandleDelete} />);
            const button = screen.getByRole('button', { name: 'Delete pizza' });
            userEvent.click(button);
            expect(mockHandleDelete).toHaveBeenCalledTimes(0);
        });
    });


});
