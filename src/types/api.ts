export type TechIconProps = {
  title: string
  icon: {
    url: string
  }
}

export type ModulesProps = {
  title
  subtitle
  description
}

export type AuthorsProps = {
  photo: {
    alternativeText: string
    url: string
  }
  name: string
  role: string
  description: string
  socialLinks: {
    title: string
    url: string
  }
}
export type ReviewsProps = {
  name: string
  text: string
  photo: {
    alternativeText: string
    url: string
  }
}

export type QuestionsProps = {
  question: string
  answer: string
}

export type LogoProps = {
  logo: {
    alternativeText: string
    url: string
  }
}
export type HeaderProps = {
  title: string
  description: string
  button: {
    label: string
    url: string
  }
  image: {
    alternativeText: string
    url: string
  }
}

export type SectionAboutProjectProps = {
  title: string
  description: string
  media: {
    alternativeText: string
    url: string
  }
}

export type SectionTechProps = {
  title: string
  techIcons: TechIconProps[]
}

export type SectionConceptsProps = {
  title: string
  concepts: {
    title: string
  }
}

export type SectionModulesProps = {
  title
  modules: ModulesProps[]
}

export type SectionAgendaProps = {
  title: string
  description: string
}

export type PricingBoxProps = {
  totalPrice: integer
  numberInstallments: integer
  priceInstallment: integer
  benefits: string
  button: {
    label: string
    url: string
  }
}

export type SectionAboutUsProps = {
  title: string
  authors: AuthorsProps[]
}

export type SectionReviewsProps = {
  title: string
  reviews: ReviewsProps[]
}

export type SectionFaqProps = {
  title: string
  questions: QuestionsProps
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
  sectionModules: SectionModulesProps
  sectionAgenda: SectionAgendaProps
  pricingBox: PricingBoxProps
  sectionAboutUs: SectionAboutUsProps
  sectionReviews: SectionReviewsProps
  sectionFaq: SectionFaqProps
}
