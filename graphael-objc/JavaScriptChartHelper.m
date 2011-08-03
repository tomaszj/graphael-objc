//
//  JavaScriptChartHelper.m
//  UIWebViewTest
//
//  Created by Tomasz Janeczko on 11-07-29.
//  Copyright 2011 __MyCompanyName__. All rights reserved.
//

#import "JavaScriptChartHelper.h"


@implementation JavaScriptChartHelper

+ (NSString*)getJSChartCodeWithName:(NSString*)chartName andArray:(NSArray*)dataArray andLegendArray:(NSArray*)legendArray {
    return [NSString stringWithFormat:@"make%@Chart(%@, %@);", chartName, [dataArray javaScriptString], [legendArray javaScriptString]];
}

+ (NSString*)getJSXYChartCodeWithName:(NSString*)chartName andXArray:(NSArray*)xArray andYArray:(NSArray*)yArray andLegendArray:(NSArray*)legendArray {
    return [NSString stringWithFormat:@"make%@Chart(%@, %@, %@);", chartName, [xArray javaScriptString], [yArray javaScriptString], [legendArray javaScriptString]];
}

+ (void)createPieChartInWebview:(UIWebView*)webView withData:(NSArray*)data andLegend:(NSArray*)legend {
    [webView stringByEvaluatingJavaScriptFromString:[self getJSChartCodeWithName:@"Pie" andArray:data andLegendArray:legend]];
}

+ (void)createLineChartInWebview:(UIWebView*)webView withXValues:(NSArray*)xValues withYValues:(NSArray*)yValues andLegend:(NSArray*)legend {
    [webView stringByEvaluatingJavaScriptFromString:[self getJSXYChartCodeWithName:@"Line" andXArray:xValues andYArray:yValues andLegendArray:legend]];
}

@end
