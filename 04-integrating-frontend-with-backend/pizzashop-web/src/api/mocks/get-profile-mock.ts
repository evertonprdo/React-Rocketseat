import { http, HttpResponse } from 'msw'

import { GetProfileResponse } from '../get-profile'

export const getProfileMock = http.get<never, never, GetProfileResponse>(
   '/me',
   () => {
      return HttpResponse.json({
         id: 'custom-user-id',
         name: 'John Doe',
         email: 'johndow@example.com',
         phone: '(99) 9 9999-9999',
         role: 'manager',
         createdAt: new Date(),
         updatedAt: null,
      })
   },
)
