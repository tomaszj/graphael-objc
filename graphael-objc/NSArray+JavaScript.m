//
//  NSArray+JavaScript.m
//  UIWebViewTest
//
//  Created by Tomasz Janeczko on 11-07-29.
//  Copyright 2011 __MyCompanyName__. All rights reserved.
//

#import "NSArray+JavaScript.h"


@implementation NSArray (JavaScript)

- (NSString*)javaScriptString {
    NSString *result = @"[";

    int count = 0;
    for (NSObject *object in self) {
        if ([object isKindOfClass:[NSNumber class]]) {
            result = [result stringByAppendingFormat:@"%@",[object description]];
        } else {
            result = [result stringByAppendingFormat:@"\"%@\"",[object description]];
        }
        if (count < [self count] - 1) { //if it is not the last element
            result = [result stringByAppendingString:@", "];
        }
        count++;
    }
    result = [result stringByAppendingString:@"]"];
    
    return result;
}

@end
