/* eslint-disable @typescript-eslint/no-explicit-any */
export function convertProps<T extends Record<string, any>>(interfaceDef: T) {
    const props: Record<string, any> = {};
    
    Object.keys(interfaceDef).forEach((key) => {
      const type = interfaceDef[key];
  
      props[key] = { type };
    });
  
    return props;
  }
  