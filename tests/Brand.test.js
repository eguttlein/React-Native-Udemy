import {render} from '@testing-library/react-native';
import Brand from '../components/Brand.js';

describe('Brand component renders correctly', () => {
  it('renders the brand title', () => {
    const {getByText} = render(<Brand />);
    const titleElement = getByText('HumanDB');
    expect(titleElement).toBeDefined();
  });
});
