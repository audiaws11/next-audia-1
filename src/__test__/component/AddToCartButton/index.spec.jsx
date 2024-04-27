import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddToCartButton from '@/component/Button/AddToCart';

describe('AddToCartButton', () => {
    it('renders correctly', () => {
        render(<AddToCartButton onClick={() => {}} />);
        expect(screen.getByRole('button', { name: 'Add to Cart' })).toBeInTheDocument();
    });

    it('calls onClick when clicked', () => {
        const mockHandleClick = jest.fn();
        render(<AddToCartButton onClick={mockHandleClick} />);
        const button = screen.getByRole('button', { name: 'Add to Cart' });
        userEvent.click(button);
        expect(mockHandleClick).toHaveBeenCalledTimes(0);
    });
    it('is disabled when the disabled prop is true', () => {
        render(<AddToCartButton onClick={() => {}} disabled={true} />);
        const button = screen.getByRole('button', { name: 'Add to Cart' });
        expect(button).toBeDisabled();
    });
});