import React from 'react';
import styled from 'styled-components/macro';
import { QUERIES } from '../../constants'

const OpinionStory = ({ id, title, author, avatar }) => {
  return (
    <LinkWrapper href={`/story/${id}`}>
      <Wrapper>
        <Avatar alt="" src={avatar} />
        <div>
          <AuthorName>{author}</AuthorName>
          <ArticleTitle>{title}</ArticleTitle>
        </div>
      </Wrapper>
    </LinkWrapper>
  )
}

const LinkWrapper = styled.a`
  padding-top: 16px;
  padding-bottom: 16px;

  &:not(:last-of-type) {
    border-bottom: 1px solid var(--color-gray-300);
  }
`

const Wrapper = styled.article`
  color: var(--color-gray-900);
`

const Avatar = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  float: right;

  @media ${QUERIES.tabletOnly} {
    float: revert;
  }
`

const AuthorName = styled.p`
  font-size: 1.125rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-700);
  margin-bottom: 4px;
`;

const ArticleTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
`;

export default OpinionStory;
