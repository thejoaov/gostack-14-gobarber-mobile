/* eslint-disable complexity */
export type TestProps = {
  props?: Record<string, unknown>
  params?: Record<string, unknown>
}

export type Navigation = {
  navigation: {
    state?: Record<string, unknown>
    dispatch(): void
    goBack(): void
    dismiss?(): void
    navigate(): void
    openDrawer?(): void
    closeDrawer?(): void
    toggleDrawer?(): void
    getParam(): Record<string, unknown> | null
    setParams(): void
    addListener(): void
    push(): void
    replace?(): void
    pop?(): void
    popToTop?(): void
    isFocused(): boolean
  }
  route: {
    params?: Record<string, unknown>
  }
}

export const createTestProps = ({
  params,
  props,
}: TestProps): TestProps & Navigation => ({
  navigation: {
    state: { params },
    dispatch: jest.fn(),
    goBack: jest.fn(),
    dismiss: jest.fn(),
    navigate: jest.fn(),
    openDrawer: jest.fn(),
    closeDrawer: jest.fn(),
    toggleDrawer: jest.fn(),
    getParam: jest.fn(),
    setParams: jest.fn(),
    addListener: jest.fn(),
    push: jest.fn(),
    replace: jest.fn(),
    pop: jest.fn(),
    popToTop: jest.fn(),
    isFocused: jest.fn(),
  },
  route: {
    params,
  },
  ...props,
})

type FakeApiReturn<T> = {
  data: T | any
  status: 200
  statusText: 'OK' | 'ERROR'
  headers: Record<string, unknown>
  config: Record<string, unknown>
}

export function fakeApiReturn<T>(
  apiReturn: Partial<FakeApiReturn<T>>,
): Required<FakeApiReturn<T>> {
  return {
    data: apiReturn.data || {},
    status: apiReturn.status || 200,
    statusText: apiReturn.statusText || 'OK',
    headers: apiReturn.headers || {},
    config: apiReturn.config || {},
  }
}
