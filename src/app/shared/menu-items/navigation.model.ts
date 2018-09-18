export class NavigationModel {
    public model: any[];

    constructor() {
        this.model = [
            {
                'id': 'ventas',
                'title': 'VENTAS',
                'type': 'group',
                'children': [
                    {
                        'id': 'sample',
                        'title': 'SAMPLE 1',
                        'type': 'item',
                        'icon': 'email',
                        'url': '/mega/ventas/sample',
                        'badge': {
                            'title': 25,
                            'bg': '#F44336',
                            'fg': '#FFFFFF'
                        }
                    },
                    {
                        'id': 'sample2',
                        'title': 'SAMPLE 2',
                        'type': 'item',
                        'icon': 'email',
                        'url': '/sample2'
                    }
                ]
            },
            {
                'id': 'compras',
                'title': 'COMPRAS',
                'type': 'group',
                'children': [
                    {
                        'id': 'sample3',
                        'title': 'COMPRAS',
                        'type': 'item',
                        'icon': 'email',
                        'url': '/sample3'
                    }
                ]
            }
        ];
    }
}
