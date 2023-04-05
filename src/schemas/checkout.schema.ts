interface CompanyData {
  name: string;
  phone: number;
}

export interface CompanyDataBody {
  companyData: CompanyData;
}

interface CustomerData {
  firstName: string;
  lastName: string;
  zipCode: number;
  mail: string;
}

export interface CustomerDataBody {
  customerData: CustomerData;
}

export interface Checkout {
  id: string;
  companyData?: CompanyData;
  customerData?: CustomerData;
}
