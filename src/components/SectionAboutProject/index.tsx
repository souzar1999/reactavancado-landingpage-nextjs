import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'
import { SectionAboutProjectProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

import * as S from './styles'

const SectionAboutProject = ({
  title,
  description,
  media
}: SectionAboutProjectProps) => (
  <S.Wrapper>
    <Container>
      <S.Container>
        <S.Image
          src={getImageUrl(media.url)}
          loading="lazy"
          alt={media.alternativeText}
        />
        <div>
          <Heading>{title}</Heading>
          <S.Text dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      </S.Container>
    </Container>
  </S.Wrapper>
)

export default SectionAboutProject
