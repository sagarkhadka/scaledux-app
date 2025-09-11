export const userRoles = ['service-provider', 'mentor', 'investor', 'freelancer'] as const

export const categoryFilter = [
  {
    label: 'Accounting & Consulting',
    value: 'accounting-consulting'
  },
  {
    label: 'Admin Support',
    value: 'admin-support'
  },
  {
    label: 'Customer Service',
    value: 'customer-service'
  },
  {
    label: 'Graphic Design',
    value: 'graphic-design'
  },
  {
    label: 'Marketing',
    value: 'marketing'
  },
  {
    label: 'Web Development',
    value: 'web-development'
  },
  {
    label: 'Data Analysis',
    value: 'data-analysis'
  },
  {
    label: 'Human Resources',
    value: 'human-resources'
  },
  {
    label: 'Product Management',
    value: 'product-management'
  },
  {
    label: 'Sales Strategy',
    value: 'sales-strategy'
  },
  {
    label: 'Content Creation',
    value: 'content-creation'
  }
] as const

export const projectScopeFilter = [
  {
    type: 'Small',
    duration: 'Less than 1 month'
  },
  {
    type: 'Medium',
    duration: '1-3 months'
  },
  {
    type: 'Large',
    duration: 'More than 3 months'
  }
] as const
