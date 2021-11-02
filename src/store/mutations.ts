import { MutationTypes } from './mutation-types'
import { State } from './state'

export type Mutation<S = State> = {
  [MutationTypes.SET_NAME](state: S, name: string): void
}
