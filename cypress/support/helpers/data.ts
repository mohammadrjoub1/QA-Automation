import { faker } from '@faker-js/faker';

export class data {

    static userObject() {
        return {

            email: faker.internet.email(),
            username: faker.person.fullName(),
            password: "4324234"

        }


    } static passUrl(): string {
        return "https://conduit.productionready.io/users"


    }
}