export interface OtMenuItem {
    name:string
    url: string
    icon: string
}

export const MENU_DATA: OtMenuItem[] = [
    {
        icon: 'radix-icons:dashboard',
        name: 'Home',
        url: '/'
    },
    {
        icon: 'ep:goods',
        name: 'Products',
        url: '/products'
    },
    {
        icon: 'ph:contactless-payment',
        name: 'Payments',
        url: '/payments'
    },
    {
        icon: 'radix-icons:dashboard',
        name: 'Home',
        url: '/'
    },
    {
        icon: 'radix-icons:dashboard',
        name: 'Home',
        url: '/'
    }
]