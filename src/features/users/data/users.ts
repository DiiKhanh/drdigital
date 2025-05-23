import { faker } from '@faker-js/faker'

const regions = [
  'Bình Tân',
  'Tân Bình',
  'Gò Vấp',
  'Phú Nhuận',
  'Thủ Đức',
  'Quận 1',
  'Quận 3',
  'Quận 7',
  'Cầu Giấy',
  'Ba Đình',
  'Thanh Xuân',
  'Hoàng Mai',
  'Hải Châu',
  'Sơn Trà'
];

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
    region: faker.helpers.arrayElement(regions)
  }
})
