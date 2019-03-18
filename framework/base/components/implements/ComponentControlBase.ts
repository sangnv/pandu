import { IComponentControlBase } from '../interfaces/IComponentControlBase';
import { ComponentBase } from './ComponentBase';
export abstract class ComponentControlBase extends ComponentBase implements IComponentControlBase {
  
  public abstract focus(): void;

  constructor(){
    super();
  }

  
}