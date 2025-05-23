import { faker } from '@faker-js/faker'
import { regionTypes } from './data'

export const users = Array.from({ length: 20 }, () => {
  const firstName = faker.person.firstName()
  const lastName = faker.person.lastName()
  return {
    id: faker.string.uuid(),
    firstName,
    lastName,
    username: faker.internet
      .username({ firstName, lastName })
      .toLocaleLowerCase(),
    email: faker.internet.email({ firstName }).toLocaleLowerCase(),
    phoneNumber: faker.phone.number({ style: 'international' }),
    status: faker.helpers.arrayElement([
      'Đang hoạt động',
      'Chưa kích hoạt',
      'Đã khóa tài khoản',
    ]),
    role: faker.helpers.arrayElement([
      'Nhân viên',
      'Giám sát',
    ]),
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
    region: faker.helpers.arrayElement(regionTypes)
  }
})
