import type { App } from 'vue'

export const version: string
export const install: (app: App) => void

export * from './basicComponent'
export * from './button'
export * from './styleVars'

declare module 'vue' {
  export interface GlobalComponents {
    VarBasicComponent: typeof import('@varlet/ui')['_BasicComponentComponent']
    VarButton: typeof import('@varlet/ui')['_ButtonComponent']
    VarStyleVars: typeof import('@varlet/ui')['_StyleVarsComponent']
  }

  export interface ComponentCustomProperties {
    
  }
}
