import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router'

import { NavLink } from './nav-link'

describe('NavLink', () => {
   it('should highlight the nav link when the is the current page link', () => {
      const wrapper = render(
         <>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
         </>,
         {
            wrapper: ({ children }) => (
               <MemoryRouter initialEntries={['/']}>{children}</MemoryRouter>
            ),
         },
      )

      expect(wrapper.getByText('Home').getAttribute('aria-current')).toEqual(
         'page',
      )

      expect(
         wrapper.getByText('About').getAttribute('aria-current'),
      ).toBeFalsy()
   })
})
