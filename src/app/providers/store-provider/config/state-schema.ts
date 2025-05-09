import { CounterSchema } from 'entities/counter';
import { UserSchema } from 'entities/user/model/types/user';

export interface StateSchema {
    counter: CounterSchema,
    user: UserSchema
}
