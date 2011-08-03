//
//  JavaScriptChartHelper.h
//  UIWebViewTest
//
//  Created by Tomasz Janeczko on 11-07-29.
//  Copyright 2011 __MyCompanyName__. All rights reserved.
//

#import <Foundation/Foundation.h>


@interface JavaScriptChartHelper : NSObject {
    
}

+ (void)createPieChartInWebview:(UIWebView*)webView withData:(NSArray*)data andLegend:(NSArray*)legend;
+ (void)createLineChartInWebview:(UIWebView*)webView withXValues:(NSArray*)xValues withYValues:(NSArray*)yValues andLegend:(NSArray*)legend;

+ (NSString*)getJSChartCodeWithName:(NSString*)chartName andArray:(NSArray*)dataArray andLegendArray:(NSArray*)legendArray;

+ (NSString*)getJSXYChartCodeWithName:(NSString*)chartName andXArray:(NSArray*)xArray andYArray:(NSArray*)yArray andLegendArray:(NSArray*)legendArray;

@end
