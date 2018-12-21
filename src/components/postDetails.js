import React from 'react';
import { View, Text, Image } from 'react-native';
import Card from './card';
import CardSection from './cardSection';

const PostDetails = ({ nav, post }) => (
    <View>
        <Card nav={nav} post={post} id={post.name}>
            <CardSection>
                <View style={styles.thumbnailContainerStyle}>
                    <Image
                        style={styles.thumbnailStyle}
                        source={{ uri: "https://placeimg.com/140/140/any" }}
                    />
                </View>
                <View style={styles.headerContentStyle}>
                    <Text style={styles.headerTextStyle}>{post.name}</Text>
                    <Text>{post.post_author}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image style={styles.imageStyle} source={{ uri: "https://placeimg.com/140/140/any" }} />
            </CardSection>
        </Card>
    </View>
);

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};

export default PostDetails;
