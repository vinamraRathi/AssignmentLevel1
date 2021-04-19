import { Injectable, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { EdituserComponent } from '../edituser/edituser.component';
import { ModalComponent } from "./modal.component";
@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private rootViewContainer: ViewContainerRef;

    constructor(private factoryResolver: ComponentFactoryResolver) {
        this.factoryResolver = factoryResolver;
    }
    setRootViewContainerRef(viewContainerRef) {
        this.rootViewContainer = viewContainerRef;
    }
    addDynamicComponent(modalTitle: string) {
      const factory = this.factoryResolver.resolveComponentFactory(ModalComponent);
      const component = factory.create(this.rootViewContainer.parentInjector);
      component.instance.modalTitle = modalTitle;
      console.log(modalTitle , "component working")
      // Subscribe to the closeModal event and destroy the component
      component.instance.closeModal.subscribe(() => this.removeDynamicComponent(component));

      this.rootViewContainer.insert(component.hostView);
  }
    addEditDynamicComponent(modalTitle: string,student:any) {
        const factory = this.factoryResolver.resolveComponentFactory(EdituserComponent);
        const component = factory.create(this.rootViewContainer.parentInjector);
        component.instance.modalTitle = modalTitle;
        component.instance.id = student.id;
        component.instance.Name = student.Name;
        component.instance.email = student.email;
        component.instance.BirthDate = student.Birthdate;
        component.instance.Active = student.Active;
        component.instance.Gender = student.Gender;
        component.instance.Subject = student.Subject;
        console.log(modalTitle , "  component working   " + JSON.stringify(student.Birthdate))
        // Subscribe to the closeModal event and destroy the component
        component.instance.closeModal.subscribe(() => this.removeDynamicComponent(component));

        this.rootViewContainer.insert(component.hostView);
    }

    removeDynamicComponent(component) {
        component.destroy();
    }
}
