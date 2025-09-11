/**
 * Service interface to define the structure of a service item.
 */
export interface ServiceItem {
  id: number;
  name: string;
}

/**
 * Service class to manage service items.
 */
export class Service {
  services: Array<ServiceItem>;

  constructor() {
    this.services = [
      { id: 1, name: "Password Reset" },
      { id: 2, name: "Spyware Removal" },
      { id: 3, name: "RAM Upgrade" },
      { id: 4, name: "Software Installation" },
      { id: 5, name: "Tune-up" },
      { id: 6, name: "Keyboard Cleaning" }
    ];
  }

  /**
   * @returns Returns an array of ServiceItem objects.
   */
  getServices(): Array<ServiceItem> {
    return this.services;
  }

  /**
   * @param id Used to find a service by ID.
   * @returns If found, returns a ServiceItem object; otherwise throws an error.
   */
  getService(id: number): ServiceItem {
    console.log('getService function called with id:', id);
    console.log('Type of id:', typeof id);

    const service = this.services.find(s => s.id === id);
    if (!service) {
      throw new Error(`Service ${id} not found`);
    }
    return service;
  }
}
