//
//  JavaScriptChartHelper.m
//  UIWebViewTest
//
//  Created by Tomasz Janeczko on 11-07-29.
//  Copyright 2011 __MyCompanyName__. All rights reserved.
//

#import "JavaScriptChartHelper.h"


@implementation JavaScriptChartHelper

+ (NSString*)getJSChartCodeWithArray:(NSArray*)dataArray andLegendArray:(NSArray*)legendArray {
    NSLog(@"%@", [NSString stringWithFormat:@"makePieChart(%@, %@)", [dataArray javaScriptString], [legendArray javaScriptString]]);
    return [NSString stringWithFormat:@"makePieChart(%@, %@)", [dataArray javaScriptString], [legendArray javaScriptString]];
}

+ (void)createPieChartInWebview:(UIWebView*)webView withData:(NSArray*)data andLegend:(NSArray*)legend {
    [webView stringByEvaluatingJavaScriptFromString:[self getJSChartCodeWithArray:data andLegendArray:legend]];
}

@end
