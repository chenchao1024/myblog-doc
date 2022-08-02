---
icon: edit
date: 2022-01-10
category:
  - CategoryA
  - CategoryB
tag:
  - tag A
  - tag B
---



# Swagger

SwaggerAPI 配置类

```java
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.ParameterBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.util.Collections;

@EnableSwagger2
@Configuration
public class SwaggerAPI {
    @Value("${swagger.enable}")
    private boolean enable;

    @Bean
    public Docket getDocket() {
        ParameterBuilder keepAlive = new ParameterBuilder();
        return new Docket(DocumentationType.SWAGGER_2).
                select().
                apis(RequestHandlerSelectors.any())
                .paths(PathSelectors.any())
                .build()
                .enable(enable)
                .apiInfo(getInfo());
    }

    /**
     * 对API文档进行全局配置
     */
    private ApiInfo getInfo() {
        ApiInfo api = new ApiInfoBuilder()
                .title("Bule Sea API")
                .version("2.0")
                .termsOfServiceUrl("http://www.bule_sea.com")
                .license("BuleSea团队版权所有")
                .description("Bule Sea 帮助文档")
                .contact(
                        new Contact(
                                "Bule Sea",
                                "http://www.xxx.com",
                                "xxx@163.com"))
                .licenseUrl("http://www.bulesea.com")
                .extensions(Collections.emptyList())
                .build();
        return api;
    }
}

```

pom文件中加人依赖

```xml
<dependency>
    <groupId>io.springfox</groupId>
    <artifactId>springfox-swagger2</artifactId>
    <version>2.2.2</version>
</dependency>
<dependency>
    <groupId>io.springfox</groupId>
    <artifactId>springfox-swagger-ui</artifactId>
    <version>2.2.2</version>
</dependency>

```

开启swagger
swagger.enable=true

默认访问路径
http://localhost:8080/swagger-ui.html
