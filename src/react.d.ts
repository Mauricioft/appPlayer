function forwardRef <T, P = {}> ( 
  Componente: RefForwardingComponent <T, P> 
): ComponentType <P & ClassAttributes <T>>