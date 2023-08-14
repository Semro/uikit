import React from 'react';

import {Text} from '../../../Text';
import {getComponentName} from '../../../utils/getComponentName';
import {TextArea, TextAreaProps} from '../TextArea';

export interface WithCounterProps {
    counterMax: number;
}

export function withCounter(
    TextAreaComponents: React.ComponentType<TextAreaProps>,
): React.ComponentType<Omit<TextAreaProps, 'note'> & WithCounterProps> {
    const componentName = getComponentName(TextAreaComponents);
    const displayName = `withCounter(${componentName})`;

    return class extends React.Component<Omit<TextAreaProps, 'note'> & WithCounterProps> {
        static displayName = displayName;

        render() {
            return <TextArea {...this.props} note={this.renderNote()} />;
        }

        private renderNote() {
            const {value, counterMax} = this.props;

            return (
                <Text color="secondary">
                    {counterMax - (value?.length ?? 0)}/{counterMax}
                </Text>
            );
        }
    };
}
