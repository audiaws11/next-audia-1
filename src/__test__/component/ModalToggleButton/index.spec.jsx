import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ModalToggleButton from '@/component/Button/ModalToggleButon';

describe('ModalToggleButton', () => {
  it('renders the button with the open text when modal is closed', () => {
    render(<ModalToggleButton isModalOpen={false} setIsModalOpen={() => {}} foodName="undefined" />);
    expect(screen.getByRole('button', { name: 'Update undefined' })).toBeInTheDocument();
  });
  it('renders the button with the close text when modal is open', () => {
    render(<ModalToggleButton isModalOpen={true} setIsModalOpen={() => {}} foodName="undefined" />);
    expect(screen.getByRole('button', { name: 'Close undefined' })).toBeInTheDocument();
  });

});