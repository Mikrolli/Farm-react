import React from 'react';
import FeatureCard from '../../ui/feature-card/feature-card';
import { Ul, Li } from '../../styled';
import { Features, StyledButton, StyledTitle } from './styles';

//Список преимуществ
function FeaturesList({ 
  features // преимущества - массив обьектов с id, title, owner, isNegative, image, about
}) {
  return features && features.length ? (
    <Features>
      <StyledTitle as="h2">Почему фермерские продукты лучше?</StyledTitle>
      <Ul $isGridList>
        {features.map((feature) => (
          <Li key={feature.id}>
            <FeatureCard {...feature} />
          </Li>
        ))}
      </Ul>
      <StyledButton link="/buy">Купить</StyledButton>
    </Features>
  ) : null;
}

export default FeaturesList;
