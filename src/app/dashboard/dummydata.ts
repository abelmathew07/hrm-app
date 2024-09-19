export const clientdata = [
    {
        clientName: 'Client 1',
        projectName: 'Project 1',
        phone: '(123) 456-7890',
        email: 'client1example.com',
        id: 1,
        img: '/clientImg/image1.png'
    },
    {
        clientName: 'Client 2', 
        projectName: 'Project 2',
        phone: '(123) 456-7890',
        email: 'client2example.com',
        id: 2,
        img: '/clientImg/image2.png'
    },
    {
        clientName: 'Client 3',
        projectName: 'Project 3',
        phone: '(123) 456-7890',   
        email: 'client3example.com',
        id: 3,
        img: '/clientImg/image3.png'
    },
    {
        clientName: 'Client 4',
        projectName: 'Project 4',
        phone: '(123) 456-7890',
        email: 'client1example.com',
        id: 4,
        img: '/clientImg/image4.png'
    },
    {
        clientName: 'Client 5',
        projectName: 'Project 5',
        phone: '(123) 456-7890',
        email: 'client1example.com',
        id: 5,
        img: '/clientImg/image5.png'
    },
    {
        clientName: 'Client 6', 
        projectName: 'Project 6',
        phone: '(123) 456-7890',
        email: 'client2example.com',
        id: 6,
        img: '/clientImg/image6.png'
    },
    {
        clientName: 'Client 7',
        projectName: 'Project 7',
        phone: '(123) 456-7890',   
        email: 'client3example.com',
        id: 7,
        img: '/clientImg/image7.png'
    },
    {
        clientName: 'Client 8',
        projectName: 'Project 8',
        phone: '(123) 456-7890',
        email: 'client1example.com',
        id: 8,
        img: '/clientImg/image8.png'
    },
    {
        clientName: 'Client 9',
        projectName: 'Project 9',
        phone: '(123) 456-7890',
        email: 'client1example.com',
        id: 9,
        img: '/clientImg/image9.png'
    }
]

export const projectdata = [
    {
        projectName: 'Project 1',
        status: 'Ongoing',
        id: 1,
        deadline: '2022-01-01',
    },
    {
        projectName: 'Project 2',
        status: 'Completed',
        id: 2,
        deadline: '2022-01-01',
    },
    {
        projectName: 'Project 3',
        status: 'Active',
        id: 3,
        deadline: '2022-01-01',
    },
    {
        projectName: 'Project 4',
        status: 'On Hold',
        id: 4,
        deadline: '2022-01-01',
    },
    {
        projectName: 'Project 5',
        status: 'Active',
        id: 5,
        deadline: '2022-01-01',
    },
    {
        projectName: 'Project 6',
        status: 'Active',
        id: 6,
        deadline: '2022-01-01',
    },
    {
        projectName: 'Project 7',
        status: 'Active',
        id: 7,
        deadline: '2022-01-01',
    },
    {
        projectName: 'Project 8',
        status: 'Active',
        id: 8,
        deadline: '2022-01-01',
    }
]

export const paymentdata = [
    {
        id: 1,
        invoiceId: 1,
        clientName: 'Client 1',
        projectName: 'Project 1',
        paymentDate: '2022-01-01',
        paidAmount: 1000,
        paymentStatus: 'Paid'
    },
    {
        id: 2,
        invoiceId: 2,
        clientName: 'Client 2',
        projectName: 'Project 2',
        paymentDate: '2022-01-01',
        paidAmount: 2000,
        paymentStatus: 'Paid'
    },
    {
        id: 3,
        invoiceId: 3,
        clientName: 'Client 3',
        projectName: 'Project 3',
        paymentDate: '2022-01-01',
        paidAmount: 3000,
        paymentStatus: 'Paid'
    },
    {
        id: 4,
        invoiceId: 4,
        clientName: 'Client 4', 
        projectName: 'Project 4',
        paymentDate: '2022-01-01',
        paidAmount: 4000,
        paymentStatus: 'Paid'
    },
    {
        id: 5,
        invoiceId: 5,
        clientName: 'Client 5',
        projectName: 'Project 5',
        paymentDate: '2022-01-01',
        paidAmount: 1000,
        paymentStatus: 'Paid'
    },
    {
        id: 6,
        invoiceId: 6,
        clientName: 'Client 6',
        projectName: 'Project 6',
        paymentDate: '2022-01-01',
        paidAmount: 2000,
        paymentStatus: 'Paid'
    },
    {
        id: 7,
        invoiceId: 7,
        clientName: 'Client 7',
        projectName: 'Project 7',
        paymentDate: '2022-01-01',
        paidAmount: 3000,
        paymentStatus: 'Paid'
    },
    {
        id: 8,
        invoiceId: 8,
        clientName: 'Client 8', 
        projectName: 'Project 8',
        paymentDate: '',
        paidAmount: 4000,
        paymentStatus: 'Pending'
    },
    {
        id: 9,
        invoiceId: 9,
        clientName: 'Client 8', 
        projectName: 'Project 9',
        paymentDate: '2022-01-01',
        paidAmount: 4000,
        paymentStatus: 'Paid'
    },
    {
        id: 10,
        invoiceId: 10,
        clientName: 'Client 2', 
        projectName: 'Project 10',
        paymentDate: '2022-03-01',
        paidAmount: 5000,
        paymentStatus: 'Paid'
    },
    {
        id: 11,
        invoiceId: 11,
        clientName: 'Client 4', 
        projectName: 'Project 11',
        paymentDate: '2022-01-04',
        paidAmount: 3000,
        paymentStatus: 'Paid'
    },
    {
        id: 12,
        invoiceId: 12,
        clientName: 'Client 4', 
        projectName: 'Project 12',
        paymentDate: '',
        paidAmount: 4500,
        paymentStatus: 'Pending'
    }
]

export const taskStatistics = [
    {
        totalTask:68,
        completedTask:30,
        pendingTask:20,
        inProgressTask:10,
        onHoldTask:5,
        reviewTask:2,
        overdueTask:1
    }
]